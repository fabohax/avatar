'use client'
import Link from 'next/link';

const ReLog = () => {

    return (
        <>
            <div className='text-center p-4 mt-8 mb-20'>
                <Link href="/log" className='w-full pb-2 border-b-2'>my_log</Link>
                <Link
                    href="https://abalone-close-59e.notion.site/Postula-a-Fondos-Clim-ticos-y-Grants-de-Web3-8904cf5c8e0846f38235db2ac2afc134"
                    target='_blank'
                >
                    <h2 className='lg:pl-36 lg:pr-36 font-bold text-3xl nubit hover:underline mt-8 mb-8'>
                        Postula a Fondos Climáticos y Grants de Web3
                    </h2>
                </Link>
            </div>
        </>
    );

}

export default ReLog;

