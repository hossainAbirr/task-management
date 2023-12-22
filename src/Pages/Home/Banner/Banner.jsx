import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <section className="bg-base-300 dark:text-gray-100">
            <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                <h1 className="text-4xl font-bold leadi sm:text-5xl">Quisquam necessita vel
                    <span className="dark:text-violet-400">laborum doloribus</span>delectus
                </h1>
                <p className="px-8 mt-8 mb-12 text-lg">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
                <div className="flex flex-wrap justify-center">
                    <Link to={'/dashboard'} className="px-8 py-3 m-2 text-lg border border-success rounded dark:text-gray-50 dark:border-gray-700">Let's Explore</Link>
                </div>
            </div>
        </section>
    );
};

export default Banner;