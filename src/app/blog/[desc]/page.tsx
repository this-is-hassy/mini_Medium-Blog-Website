import { blogs } from "../../../contentful/connection";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";

const page = async () => {
  try {
    const data = await blogs();
    const blogData = data.items;
    const adminImg = data.includes.Asset[0].fields.file.url;
    return (
      <>
        <div>
          <div className="container bg-white mx-auto w-4/5 shadow-2xl px-8 ">
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
              return (
                <div key={blog.sys.id}>
                  <div className=" flex py-8">
                    <div className="w-1/2 flex justify-start">
                      <div>
                        <div className="flex pb-4">
                          <img
                            src={adminImg}
                            width={40}
                            height={40}
                            alt="authorImg"
                          />
                          <p className="pl-4 text-sm">
                            Written by: <br />
                            {blogAuther.fields.authername}
                          </p>
                        </div>
                        <h1 className="pb-4 font-bold text-2xl font-mono text-zinc-800">{blog.fields.title}</h1>
                        <p className="pb-6 text-justify w-4/5">
                          {documentToReactComponents(blog.fields.description)}
                        </p>
                        <Link
                          className="py-3 text-yellow-50 bg-gradient-to-r from-orange-500 to-orange-600 px-7 text-md rounded-sm"
                          href="/blog"
                          as="/"
                        >
                          Back
                        </Link>
                      </div>
                    </div>
                    <div className="w-1/2 flex justify-end  ">
                      <img
                        src={blogImg.fields.file.url}
                        width={500}
                        height={300}
                        alt="blogImg"
                        className="rounded-xl"
                      />
                    </div>
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
