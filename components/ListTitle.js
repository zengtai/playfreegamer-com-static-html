export default function ListTitle({ title, description }) {
  return (
    <header className="m-4 flex flex-col items-center">
      <h1
        className={`${
          description && "mb-2"
        } text-2xl font-black text-rose-500 xl:mx-8 xl:mt-8`}
      >
        {title}
      </h1>
      {description && (
        <p className="max-w-3xl text-sm leading-6 text-gray-500">
          {description}
        </p>
      )}
    </header>
  );
}
