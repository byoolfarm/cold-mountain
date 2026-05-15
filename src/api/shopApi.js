import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { supabase } from '../lib/supabase';

export const shopApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }), // Not used for Supabase but required by RTK Query
  tagTypes: ['Product', 'Category'],
  keepUnusedDataFor: 86400,
  endpoints: (builder) => ({
    getProducts: builder.query({
      queryFn: async () => {
        try {
          const { data, error } = await supabase
            .from('products')
            .select('*');
          console.log("data",data)
          if (error) throw error;
          
          // Map DB fields to Frontend fields if necessary
          const mappedData = data.map(p => ({
            ...p,
            cat: p.cat_id, // Mapping cat_id from DB to cat in UI
            imgKey: p.img_key
          }));
          
          return { data: mappedData };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ['Product'],
    }),
    
    getProductById: builder.query({
      queryFn: async (id) => {
        try {
          const { data, error } = await supabase
            .from('products')
            .select('*')
            .eq('id', id)
            .single();
            
          if (error) throw error;
          
          return { data: {
            ...data,
            cat: data.cat_id,
            imgKey: data.img_key
          }};
        } catch (error) {
          return { error };
        }
      },
      providesTags: (result, error, id) => [{ type: 'Product', id }],
    }),

    getCategories: builder.query({
      queryFn: async () => {
        try {
          const { data, error } = await supabase
            .from('categories')
            .select('*');
            
          if (error) throw error;
          
          // Map DB fields to Frontend fields
          const mappedData = data.map(c => ({
            ...c,
            parentId: c.parent_id
          }));
          
          return { data: mappedData };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ['Category'],
    }),

    createOrder: builder.mutation({
      queryFn: async ({ order, items }) => {
        try {
          // 1. Create the order
          const { data: orderData, error: orderError } = await supabase
            .from('orders')
            .insert([order])
            .select()
            .single();

          if (orderError) throw orderError;

          // 2. Create order items
          const orderItems = items.map(item => ({
            order_id: orderData.id,
            product_id: item.id,
            quantity: item.quantity,
            price_at_time: item.price
          }));

          const { error: itemsError } = await supabase
            .from('order_items')
            .insert(orderItems);

          if (itemsError) throw itemsError;

          return { data: orderData };
        } catch (error) {
          return { error };
        }
      }
    })
  }),
});

export const { 
  useGetProductsQuery, 
  useGetProductByIdQuery, 
  useGetCategoriesQuery,
  useCreateOrderMutation
} = shopApi;
