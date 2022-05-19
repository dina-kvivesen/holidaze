import { useState } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import { Message } from '../common/Message';
import { RefreshIcon } from '@heroicons/react/outline';
import { PrimaryButton } from '../common/Buttons';
import { BASE_URL } from '../../constants/api';
const schema = yup.object().shape({
  email: yup
    .string()
    .required(<Message message="Please enter your email" style="warning" />)
    .email(
      <Message message="Please enter a valid email address" style="warning" />
    ),
  name: yup
    .string()
    .required(<Message message="Please enter your name" style="warning" />),
  title: yup
    .string()
    .required(<Message message="Please write a title" style="warning" />),
  message: yup
    .string()
    .required(<Message message="Please write a message" style="warning" />),
});
function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitMessage, setSubmitMessage] = useState('');

  const { register, handleSubmit, reset, formState: { errors }} = useForm({
    resolver: yupResolver(schema)
  });
  /* const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  }); */

  async function onSubmit(data) {
    setSubmitting(true);
    setSubmitError(null);
    try {
      const response = await axios.post(BASE_URL + 'messages', {data:data});
      console.log(response);
      setSubmitMessage(<Message message="Message sent" style="success" />);
    } catch (error) {
      console.log('error', error);
      setSubmitError(error.toString());
    } finally {
      setSubmitting(false);
      reset();
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={submitting}>
          <div className="mt-2 shadow-lg overflow-hidden sm:rounded-md ">
            <div className="px-4 py-5 bg-white sm:p-6 ">
              <div className="text-left sm:w-10/12 lg:w-2/4 mx-auto">
                <div className="flex flex-col mb-6 ">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700">
                    Email:
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="email"
                    {...register('email')}
                    className="mt-2 py-2 px-3 border outline-none border-gray-300  focus:border-primary rounded-md"></input>
                  {errors.email && errors.email.message}
                </div>
                <div className="flex flex-col mb-6">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700">
                    Your name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    {...register('name')}
                    className="mt-2 py-2 px-3 border outline-none border-gray-300  focus:border-primary rounded-md"></input>
                  {errors.name && errors.name.message}
                </div>
                <div className="flex flex-col mb-6">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700">
                    Title:
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    {...register('title')}
                    className="mt-2 py-2 px-3 border outline-none border-gray-300  focus:border-primary rounded-md"></input>
                  {errors.title && errors.title.message}
                </div>
                <div className="flex flex-col mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700">
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    {...register('message')}
                    className="mt-2 py-2 px-3 border outline-none border-gray-300  focus:border-primary rounded-md"></textarea>
                  {errors.message && errors.message.message}
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center sm:w-10/12 lg:w-2/4 mx-auto">
                <div>
                  {submitError ? (
                    <Message message={submitError} style="danger" />
                  ) : null}
                  {submitMessage}
                </div>
                {submitting ? (
                  <PrimaryButton type="submit">
                    <RefreshIcon className="animate-spin-reverse inline w-5 mr-2" />
                    Sending Message
                  </PrimaryButton>
                ) : (
                  <PrimaryButton type="submit">Send Message</PrimaryButton>
                )}
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default ContactForm;