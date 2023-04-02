export default function Bootcamp() {
  return (
    <div className="flex md:py-8 md:flex-row flex-col md:mx-0 mx-3 gap-y-6">
      {/* Left Part */}
      <div className="bg-[url('/bootcamp3.jpg')] bg-cover bg-center h-[11cm] md:basis-1/2"></div>
      {/* Right Part */}
      <div className="bg-[url('/bg123.avif')] -my-4 md:basis-1/2 pl-4 pb-4">
        <h1 className="md:text-5xl text-4xl font-bold pt-10 md:ml-[11px] ml-2">Bootcamp 2023</h1>
        <p className="pt-4 md:pr-[150px] px-3 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          officiis, labore perferendis eius eos recusandae voluptatum suscipit
          at, architecto impedit tempora excepturi nostrum odio, blanditiis
          numquam veniam fugiat voluptatem delectus!Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nesciunt officiis, labore perferendis
          eius eos recusandae voluptatum suscipit at, architecto impedit tempora
          excepturi nostrum odio, blanditiis numquam veniam fugiat voluptatem
          delectus!
        </p>
        <button
          className="mt-4 ml-20 bg-blue-600 rounded-lg hover:bg-blue-800 text-white px-5 md:ml-3 py-3 font-bold"
          title="click to visit">
          Read More
        </button>
      </div>
    </div>
  );
}
