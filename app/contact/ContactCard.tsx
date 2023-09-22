import Link from 'next/link'

type DataType = {
  title: string
  subtitle: string
  description: string
  items: {
    type: string
    note: string
    contact: string
  }[]
}

const data: DataType = {
  title: 'Contact',
  subtitle: 'お問い合わせ',
  description:
    'システム開発コンサルティングなど各種サービスについてお問い合わせがございましたら、お問い合わせフォームまたはお電話にてお気軽にご連絡ください。',
  items: [
    {
      type: 'メールでのお問い合わせ',
      note: '※Webフォームにてご連絡承ります',
      contact: 'Contact Us'
    },
    {
      type: '電話でのお問い合わせ',
      note: '※平日 10:00～17:00',
      contact: '070-1321-1199'
    }
  ]
}

const ContactCard = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-16 rounded">
    <div>
      <div className="text-7xl font-bold">{data.title}</div>
      <div className="mt-2 font-medium">{data.subtitle}</div>
    </div>
    <div className="flex flex-col justify-center">{data.description}</div>
    {data.items.map((info, index) => (
      <div key={index} className="--border p-12 text-center">
        <p>{info.type}</p>
        <p className="text-sm mt-2">{info.note}</p>
        <p className="text-4xl md:text-6xl mt-6 relative">
          <Link className="--link" href="/contact">
            {info.contact}
          </Link>
        </p>
      </div>
    ))}
  </div>
)

export default ContactCard
