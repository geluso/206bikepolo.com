import Link from 'next/link'

export default function Page () {
  return (
    <div id='main'>
      <div className='tournament-nav-container'>
        <Link href='/'>
          <button>Home</button>
        </Link>
        <Link href='/tournaments'>
          <button>2024 Cascadia Qualifier &#x2728;</button>
        </Link>
      </div>
      <div>
        <p>
          <a href='https://docs.google.com/spreadsheets/u/0/d/1AGFDK9q0FRlkJO21pvcy2CKDlJXbh6EKetmHTl-dN0E/htmlview#'>
            https://docs.google.com/spreadsheets/u/0/d/1AGFDK9q0FRlkJO21pvcy2CKDlJXbh6EKetmHTl-dN0E/htmlview#
          </a>
        </p>
        <iframe src='https://docs.google.com/spreadsheets/u/0/d/1AGFDK9q0FRlkJO21pvcy2CKDlJXbh6EKetmHTl-dN0E/htmlview#'></iframe>
      </div>
    </div>
  )
}
