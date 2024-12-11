import { getQuote } from '@/actions/quote';

// component that will show quote information from a function in the actions folder,
// where it fetches quotes from the zenquotes api
export default async function QuoteContainer() {
  const response = await getQuote();
  return (
    <div className="w-[50%] p-2 m-0 m-auto relative top-1/2 border-solid border-2 rounded-md">
      <div className="flex flex-col gap-2 justify-center items-center ">
        <p className="text-center">{response[0].q}</p>
        <p>{response[0].a}</p>
      </div>
    </div>
  );
}
