import Cookies from "js-cookie"
import instance from "./AxiosInstance"

export const postData = async (url, body) => {
   instance.defaults.headers.post['Authorization'] = 'Bearer ' + Cookies.get('token');

   instance.interceptors.request.use(function (config) {
      // Do something before request is sent
      const token = Cookies.get('token');
      config.headers.Authorization =  token ? `Bearer ${token}` : '';
      return config
   }, function (error) {
      // Do something with request error
      return Promise.reject(error);
   });

   try {
      const res = await instance.post(url, body);
      return res;
   } catch (err) {
      return err;
   }
}

export const deleteData = async (url) => {
   // Add a request interceptor
   instance.interceptors.request.use(function (config) {
      // Do something before request is sent
      const token = Cookies.get('token');
      config.headers.Authorization =  token ? `Bearer ${token}` : '';
      return config
   }, function (error) {
      // Do something with request error
      return Promise.reject(error);
   });

   try {
      const res = await instance.delete(url);
      return res;
   } catch (err) {
      return err;
   }
}

export const editData = async (url, body) => {
   // Add a request interceptor
   instance.interceptors.request.use(function (config) {
      // Do something before request is sent
      const token = Cookies.get('token');
      config.headers.Authorization =  token ? `Bearer ${token}` : '';
      return config
   }, function (error) {
      // Do something with request error
      return Promise.reject(error);
   });

   try {
      const res = await instance.put(url, body);
      return res;
   } catch (err) {
      return err;
   }
}