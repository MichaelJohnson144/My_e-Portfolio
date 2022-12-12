import { FormProvider, useForm } from 'react-hook-form';
import axios from 'axios';
import FormField from './FormField/FormField';
import { useRouter } from 'next/router';

export default function Form() {
  const methods = useForm();
  const router = useRouter();

  async function onSubmit(data: any) {
    let config = {
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_API_URL}/../../api/contact`,
      data: data,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const response = await axios(config);
      console.log(response);
      if (response.status === 200) {
        console.log('Your form was submitted successfully');
        methods.reset();
        await router.push('/contact/confirmation');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={
          'flex flex-row flex-nowrap justify-center content-center items-center w-full h-screen'
        }
      >
        <FormField />
      </form>
    </FormProvider>
  );
}
