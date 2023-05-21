import React from 'react'

const FileSystem = () => {
    return (
        <span className="properties-window">
            {/* Tab gradient */}
            <div className="tab-gradient">
                <h1 className="">C:\FRAG-Z\WIKI\PAGES</h1>
                <div className="flex flex-row gap-2">
                    <span className="tab-gradient-button">?</span>
                    <span className="tab-gradient-button">X</span>
                </div>
            </div>
            {/* Filesystem window */}
            <section className="flex flex-col w-full h-full pt-4">
                {/* Explorer*/}
                <div className="w-full h-full flex flex-row items-end justify-start border-2 border-t-black border-l-black bg-white">

                </div>
            </section>
        </span>
    )
}

export default FileSystem