
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function UpdateBook() {
    const { id } = useParams();
    const [name, setName] = useState("")
    const [amount, setAmount] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:4000/books/" + id);
          setName(response.data.name);
          setAmount(response.data.amount);
      } catch (error) {
        console.error("Error fetching books:", error.response.data.error);
      }
    };

    fetchBooks();
    }, []);
    

    const HandleUpdateBook = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.put("http://localhost:4000/books/" + id, {
                amount,
            })
            console.log(response)
            navigate("/getallbooks")
        } catch(error) {
            console.error("Error Creating in:", error.response.data.error);
        }
    }

    
  return (
    <div className="bg-white py-10 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <form onSubmit={HandleUpdateBook}>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                  Update Books available
                </h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">{name}</p>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="ammount"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      amount
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="ammount"
                        id="ammount"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                href="/"
              >
                save
              </button>
            </div>
          </form>
        </div>
      </div>
       <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        <Link to="/getallbooks">
          <span aria-hidden="true">&larr;</span>
        </Link>
      </h2>
    </div>
    
  );
}


