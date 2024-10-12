import { Divider, Flex, Image } from "antd";
import { react, supabase, antd, ts, tailwind, blank } from "../../assets";

const Introduction = () => {
  return (
    <section className="flex flex-col-reverse gap-y-20 xl:gap-y-0 xl:flex-row justify-around items-center min-h-[100vh] px-2 py-20 xl:py-4 w-[100%] xl:px-24">
      <article>
        <Flex gap={8} justify="center">
          <h1 className="text-5xl">Raza Haider</h1>
        </Flex>
        <p className="text-xl xl:text-lg text-[var(--primary)]">
          Software Engineer
          <Divider
            dashed={false}
            type="vertical"
            className="bg-[var(--dark)] px-[0.1px] rounded-sm py-2 mb-1"
          />
          React
        </p>
      </article>
      <figure className="grid grid-cols-2 gap-x-24 xl:gap-x-48 items-center">
        <Image
          src={tailwind}
          width={100}
          alt={"Tailwind CSS"}
          preview={false}
        />
        <Image src={supabase} width={80} alt={"Supabase"} preview={false} />
        <article className="col-span-2 mx-auto">
          <Image
            src={react}
            width={100}
            alt={"React"}
            preview={false}
            className="absolute z-20 top-5 left-5 spin-slow"
          />
          <figure className="border-2 border-transparent border-t-[var(--dark)] border-b-[var(--dark)] rounded-full p-5 relative spin-fast">
            <Image src={blank} width={100} alt={"React"} preview={false} />
          </figure>
        </article>
        <Image src={antd} width={100} alt={"Ant Design"} preview={false} />
        <Image src={ts} width={100} alt={"TypeScript"} preview={false} />
      </figure>
    </section>
  );
};

export default Introduction;
