import { blogs } from "../../contentful/connection";
import Link from "next/link";

const page = async () => {
  try {
    const data = await blogs();
    const blogData = data.items;
    const adminImg = data.includes.Asset[0].fields.file.url;

    return (
      <>
        <div>
          <div className="container bg-white mx-auto w-3/5 py-2 shadow-2xl px-8">
            <header className="w-full mx-auto pb-8 text-2xl font-semibold font-mono text-red-700 ">
              <img
                src="/medium.png"
                alt="logo"
                className="w-16 inline-flex pr-2"
              />
              mini_MEDIUM
              <div className="w-full h-[2px] bg-black "></div>
            </header>
            {blogData?.map((blog: any) => {
              const blogImg = data.includes.Asset.find(
                (img: any) => img.sys.id === blog.fields.picture.sys.id
              );
              const blogAuther = data.includes.Entry.find(
                (admin: any) => admin.sys.id === blog.fields.adminName.sys.id
              );

              const filtDesc = () => {
                const completeDesc =
                  blog.fields.description.content[0].content[0].value;
                const words = completeDesc.split(" ");
                const first20Words = words.slice(0, 20);
                const Description = first20Words.join(" ");
                return Description;
              };

              return (
                <div className="w-4/5 mx-20 py-8">
                  <div key={blog.sys.id}>
                    <div className="pb-6 ">
                      <img
                        className="rounded-lg"
                        src={blogImg.fields.file.url}
                        alt="blogImg"
                      />
                    </div>
                    <div className="flex  pb-4">
                      <img
                        src={adminImg}
                        width={40}
                        height={40}
                        alt="authorImg"
                      />
                      <p className="pl-3 text-sm">
                        Written by: <br />
                        {blogAuther.fields.authername}
                      </p>
                    </div>
                    <h1 className="pb-2 font-bold text-2xl font-mono text-zinc-800">
                      {blog.fields.title}
                    </h1>
                    <p className="pb-4 ">{filtDesc()}...</p>
                    <Link
                      className="py-3 text-yellow-50  bg-gradient-to-r from-orange-500 to-orange-600 px-5 text-sm rounded-sm"
                      href="/blog"
                      as="/blog/desc"
                    >
                      READ MORE
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  } catch (error) {}
};

export default page;
