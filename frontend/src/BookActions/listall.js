import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function BookList() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    const fetchbooks = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/books`);
        setBooks(response.data);
        console.log(books);
      } catch (error) {
        console.error("error fetching books:", error.response.data.error);
      }
    };
    fetchbooks();
  }, []);

  const HandleDeleteBook = async (id, e) => {
    console.log("here")
    try {
      const response = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/books/` + id);
      console.log(response)
      navigate("/")
    } catch (error) {
      console.error("error deleting book:", error.response.data.error);
    }
  };

  return (
    <div className="bg-white py-10 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Books available
              </h2>
              <div className="mt-10 ">
                <div className=""></div>
                <ul role="list" className="divide-y divide-gray-100">
                  {books.map((books) => (
                    <li
                      key={books.name}
                      className="flex justify-between gap-x-6 py-5"
                    >
                      <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-900">
                            {books.name}
                          </p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                            {books.author}
                          </p>
                        </div>
                      </div>
                      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <Link
                          to={`/listbyid/${books._id}`}
                          className="text-sm leading-6 text-gray-900"
                        >
                          See Details
                        </Link>
                        <Link
                          to={`/updatebook/${books._id}`}
                          className="text-sm leading-6 text-gray-900"
                        >
                          Update
                        </Link>
                        <Link className="text-sm leading-6 text-gray-900" onClick={() => HandleDeleteBook(books._id)}>
                          Delete
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
