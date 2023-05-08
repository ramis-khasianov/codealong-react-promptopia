import Feed from "@components/Feed";


const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share&nbsp;
            <br className="nax-md: hidden" />
            <span className="orange_gradient text-center">
                AI-Powered Prompts
            </span>
        </h1>
        <p className="desc text-center">
            Promptopia is a place to find inspiration for your next prompt.
            Create and share creative prompts with the world.
        </p>

        <Feed />
    </section>
  )
}

export default Home
