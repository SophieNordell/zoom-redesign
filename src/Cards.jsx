export default function Cards({ icon, title }) {
  return (
    <div>
      <div
        className="flex flex-1 flex-col cursor-pointer mt-10  border border-spacing-4 items-center text-2xl
       rounded-2xl font-bold font-mono box-content p-8 hover:shadow-md hover:shadow-zoom-blue hover:text-zoom-blue"
      >
        <div>{icon}</div>
        {title}
      </div>
    </div>
  );
}
