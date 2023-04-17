import { FormEvent, useState } from "react";

export default function GPT() {
    const [quote, setQuote] = useState("");
    const [quoteLoading, setQuoteLoading] = useState(false);
    const [quoteLoadingError, setQuoteLoadingError] = useState(false);
  
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);
      const prompt = formData.get("prompt")?.toString().trim();
  
      if (prompt) {
        try {
          setQuote("");
          setQuoteLoadingError(false);
          setQuoteLoading(true);
  
          const response = await fetch("/api/cringe?prompt=" + encodeURIComponent(prompt));
          const body = await response.json();
          setQuote(body.quote);
        } catch (error) {
          console.error(error);
          setQuoteLoadingError(true);
        } finally {
          setQuoteLoading(false);
        }
      }
    }
  
    return (
      <>
        <form onSubmit={handleSubmit}>
            <textarea
                name='prompt'
                placeholder='e.g. success, fear, potatoes'
                maxLength={100}
              />
            <button type='submit' disabled={quoteLoading}>
              Make me cringe
            </button>
          </form>
          {quoteLoading && "loading...."}
          {quoteLoadingError && "Something went wrong. Please try again."}
          {quote && <h5>{quote}</h5>}
      </>
    )
}