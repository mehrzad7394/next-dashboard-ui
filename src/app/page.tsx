import Link from "next/link";

const Homepage = () => {
  return (
    <div className="">
      <Link href={"/admin"} className="bg-blue-200 rounded-md p-2 m-2">
        Admin Page
      </Link>
    </div>
  );
};

export default Homepage;
