// import logo from './logo.svg';
// import './App.css';
// import Home from './Componentes/Navbar';

function Home() {
  return (
    <>
      <div class="w-auto mx-auto my-20 rounded-xl  overflow-hidden ">
        <div class="md:flex">
          <div class="mx-auto p-8">
            <p class="uppercase tracking-wide text-5xl text-center  text-indigo-500 font-normal">
              online education is like a rising tide, it's going to lift all
              boats.
            </p>
            <p class="mt-2 text-2xl text-slate-600">
              We help companies develop the strongest tech teams around. We help
              users sharpen their tech skills and pursue job opportunities.
            </p>
          </div>
        </div>
      </div>
      <div class="w-auto mx-auto my-20 rounded-xl  overflow-hidden ">
        <button
          type="button"
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4
           focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white
            dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          LogIn
        </button>
      </div>
    </>
  );
}

export default Home;
