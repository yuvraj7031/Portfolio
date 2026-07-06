function Background() {

    return (

        <div className="fixed inset-0 -z-10 overflow-hidden">

            <div
                className="
                absolute
                w-[700px]
                h-[700px]
                bg-blue-600/20
                rounded-full
                blur-[140px]
                top-[-200px]
                left-[-150px]
                animate-pulse
                "
            />

            <div
                className="
                absolute
                w-[600px]
                h-[600px]
                bg-cyan-500/10
                rounded-full
                blur-[120px]
                bottom-[-200px]
                right-[-150px]
                animate-pulse
                "
            />

        </div>

    );

}

export default Background;