import Head from 'next/head';
import A from './A.js';

function MainContainer({children, title}) {
  return (
    <>
        <Head>
            <title>{title}</title>
        </Head>
        <div className="navbar">
            <A href={'/'} text={'Главная'}/>
            <A href={'/users'} text={'Пользователи'}/>
        </div>
        <div>
            {children}
        </div>
    </>
  )
}

export default MainContainer