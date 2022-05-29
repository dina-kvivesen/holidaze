import AdminLayout from '../../components/admin/layout/AdminLayout';
import Head from '../../components/layout/Head';
import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { PrimaryButton } from '../../components/common/Buttons';
import { BigMessage, Message } from '../../components/common/Message';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import AuthContext from '../../context/AuthContext';
import Heading from '../../components/common/Heading';
import { BASE_URL } from '../../constants/api';
import { RefreshIcon } from '@heroicons/react/solid';

const numberTooHigh = <Message message="Number too high" style="warning" />;
const numberIsNegative = (
  <Message message="Number can't be negative" style="warning" />
);
const numberIsEmpty = (
  <Message message="Please enter a number" style="warning" />
);
const textTooShort = <Message message="Text too short" style="warning" />;
const textTooLong = <Message message="Text too long" style="warning" />;

const schema = yup.object().shape({
  title: yup
    .string()
    .max(50, textTooLong)
    .min(2, textTooShort)
    .required(<Message message="Please enter a title" style="warning" />),
 /*  address: yup
    .string()
    .max(50, textTooLong)
    .min(5, textTooShort)
    .required(<Message message="Please enter an address" style="warning" />), */
  host: yup
    .string()
    .max(50, textTooLong)
    .min(2, textTooShort)
    .required(<Message message="Please enter the name of host" style="warning" />),
  price: yup
    .number()
    .positive(numberIsNegative)
    .integer()
    .transform((value) => (isNaN(value) ? undefined : value))
    .required(numberIsEmpty)
    .max(999999, numberTooHigh)
    .required(<Message message="Please enter a price" style="warning" />),
  parking: yup
    .number()
    .positive(numberIsNegative)
    .integer()
    .transform((value) => (isNaN(value) ? undefined : value))
    .required(numberIsEmpty)
    .max(20, numberTooHigh)
    .required(
      <Message message="Please enter number of parking spaces" style="warning" />
    ),
  bed: yup
    .number()
    .positive(numberIsNegative)
    .integer()
    .transform((value) => (isNaN(value) ? undefined : value))
    .required(numberIsEmpty)
    .max(20, numberTooHigh)
    .required(
      <Message message="Please enter number of beds" style="warning" />
    ),
  bath: yup
    .number()
    .positive(numberIsNegative)
    .integer()
    .transform((value) => (isNaN(value) ? undefined : value))
    .required(numberIsEmpty)
    .max(20, numberTooHigh)
    .required(
      <Message message="Please enter number of bathrooms" style="warning" />
    ),
  description: yup
    .string()
    .max(1500, textTooLong)
    .min(30, textTooShort)
    .required(<Message message="Please enter a description" style="warning" />),
  /* featuredImage: yup
    .mixed()
    .required(
      <Message message="Please select a featured image" style="warning" />
    ), 
  images: yup
  .mixed()
  .required(
    <Message message="Please select an image" style="warning" />
  ), */
});
function AddPlace() {
  const [auth, setAuth] = useContext(AuthContext);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const router = useRouter();
  const { register, handleSubmit, reset, formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  });

  if (!auth) {
    router.push('/login');
    return (
      <BigMessage message="Oops! Did you forget to log in?" style="danger" />
    );
  }

  async function onSubmit(data) {
    const url = BASE_URL + 'places?populate=*';
    setSubmitting(true);
    setSubmitError(null);
    const token = auth.jwt;
    //console.log('file content ===', data);
      const formData = new FormData();
      formData.append("files.featuredImage", data.featuredImage[0]);
      delete data.featuredImage; 
      formData.append("files.images", data.images[0]);
      delete data.images;

      formData.append('data', JSON.stringify(data));
      //console.log({formData});
    try {
      const options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "POST",
		    body: formData,
      };
     
      const response = await fetch(url, options);
      //console.log(response);
    } catch (error) {
      console.log('error', error);
      setSubmitError(error.toString());
    } finally {
      setSubmitting(false);
      reset();
    }
  }

  return (
    <>
      <AdminLayout>
        <Head title="Add new place | Dashboard" />
        <div className="w-full mx-auto">
          <Heading text="Add new place" />
          <div className="shadow border-b bg-white sm:rounded-lg overflow-hidden">
            <div className="p-2 bg-primary text-white"></div>
            <div className="p-6">
              <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset disabled={submitting}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    <div>
                      <div>
                        <label
                          htmlFor="title"
                          className="mt-3 block text-sm font-medium text-gray-700">
                          Title:
                        </label>
                        <input
                          type="text"
                          name="title"
                          id="title"
                          {...register('title')}
                          className="w-full mt-1 py-2 px-3 border outline-none border-gray-300  focus:border-primary rounded-md"></input>
                        {errors.title && errors.title.message}
                      </div>
                      {/* <div>
                        <label
                          htmlFor="address"
                          className="mt-3 block text-sm font-medium text-gray-700">
                          Address:
                        </label>
                        <input
                          type="text"
                          name="address"
                          id="address"
                          {...register('address')}
                          className="w-full mt-1 py-2 px-3 border outline-none border-gray-300  focus:border-primary rounded-md"></input>
                        {errors.address && errors.address.message}
                      </div> */}
                      <div>
                        <label
                          htmlFor="host"
                          className="mt-3 block text-sm font-medium text-gray-700">
                          Hosts name:
                        </label>
                        <input
                          type="text"
                          name="host"
                          id="host"
                          {...register('host')}
                          className="w-full mt-1 py-2 px-3 border outline-none border-gray-300  focus:border-primary rounded-md"></input>
                        {errors.host && errors.host.message}
                      </div>
                    </div>
                    <div>
                      <div>
                        <label
                          htmlFor="price"
                          className="mt-3 block text-sm font-medium text-gray-700">
                          Price $:
                        </label>
                        <input 
                          type="number"
                          name="price"
                          id="price"
                          {...register('price')}
                          className="w-full mt-1 py-2 px-3 border outline-none border-gray-300  focus:border-primary rounded-md"></input>
                        {errors.price && errors.price.message}
                      </div>
                      <div>
                        <label
                          htmlFor="parking"
                          className="mt-3 block text-sm font-medium text-gray-700">
                          Parking:
                        </label>
                        <input
                          type="number"
                          name="parking"
                          id="parking"
                          {...register('parking')}
                          className="w-full mt-1 py-2 px-3 border outline-none border-gray-300  focus:border-primary rounded-md"></input>
                        {errors.parking && errors.parking.message}
                      </div>
                      <div>
                        <label
                          htmlFor="bed"
                          className="mt-3 block text-sm font-medium text-gray-700">
                          Beds:
                        </label>
                        <input
                          type="number"
                          name="bed"
                          id="bed"
                          {...register('bed')}
                          className="w-full mt-1 py-2 px-3 border outline-none border-gray-300  focus:border-primary rounded-md"></input>
                        {errors.bed && errors.bed.message}
                      </div>
                      <div>
                        <label
                          htmlFor="bath"
                          className="mt-3 block text-sm font-medium text-gray-700">
                          Baths:
                        </label>
                        <input
                          type="number"
                          name="bath"
                          id="bath"
                          {...register('bath')}
                          className="w-full mt-1 py-2 px-3 border outline-none border-gray-300  focus:border-primary rounded-md"></input>
                        {errors.bath && errors.bath.message}
                      </div>
                    </div>
                    <div className="col-span-1 sm:col-span-2 xl:col-span-1">
                      <label
                        htmlFor="description"
                        className="mt-3 block text-sm font-medium text-gray-700">
                        Description:
                      </label>
                      <div className="h-60 flex flex-col col-span-1 sm:col-span-2 xl:col-span-1">
                        <textarea
                          type="text"
                          name="description"
                          id="description"
                          {...register('description')}
                          className="h-60 box-border w-full mt-1 py-2 px-3 border outline-none border-gray-300  focus:border-primary rounded-md"></textarea>
                        {errors.description && errors.description.message}
                      </div>
                    </div>
                    <div className="col-span-1 sm:col-span-2 xl:col-span-1">
                      <label className="mt-3 block text-sm font-medium text-gray-700">
                        Choose image:
                      </label>
                      <input 
                      required
                      type="file" 
                      name="images" 
                      {...register("images")}></input>
                      {/* {errors.images && errors.images.message} */}
                    </div>
                    <div className="col-span-1 sm:col-span-2 xl:col-span-1">
                      <label className="mt-3 block text-sm font-medium text-gray-700">
                        Choose featured image:
                      </label>
                      <input 
                      required
                      type="file" 
                      name="featuredImage" 
                      {...register("featuredImage")}></input>
                      {/* {errors.featuredImage && errors.featuredImage.message} */}
                    </div>
                    
                  </div>
                  <div className="mt-6">
                    <div className="pr-4">
                      {submitError ? (
                        <Message message={submitError} style="danger" />
                      ) : null}
                    </div>
                    {submitting ? (
                      <PrimaryButton type="submit">
                        <RefreshIcon className="animate-spin-reverse inline w-5 mr-2" />
                        Creating place
                      </PrimaryButton>
                    ) : (
                      <PrimaryButton type="submit">
                        Create new place
                      </PrimaryButton>
                    )}
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}

export default AddPlace;