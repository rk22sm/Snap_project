import NextTopLoader from "nextjs-toploader";

const TopLoader = () => {
    return (
        <NextTopLoader
            color="#338CF1"
            crawl={true}
            crawlSpeed={200}
            easing="ease"
            height={3}
            initialPosition={0.08}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            speed={200}
        />
    );
};

export default TopLoader;
