import Link from 'next/link'

const ContactCard = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-16 rounded">
    <div>
      <div className="text-7xl font-bold">Contact</div>
      <div className="mt-2 font-medium">お問い合わせ</div>
    </div>
    <div className="flex flex-col justify-center">
      システム開発コンサルティングなど各種サービスについてお問い合わせがございましたら、お問い合わせフォームまたはお電話にてお気軽にご連絡ください。
    </div>
    <div className="--border p-12 text-center">
      <p>メールでのお問い合わせ</p>
      <p className="text-sm mt-2">※Webフォームにてご連絡承ります</p>
      <p className="text-4xl md:text-6xl mt-6 relative">
        <Link className="--link" href="/contact">
          Contact Us
        </Link>
      </p>
    </div>
    <div className="--border p-12 text-center">
      <p>電話でのお問い合わせ</p>
      <p className="text-sm mt-2">※平日 10:00～17:00</p>
      <p className="text-4xl md:text-6xl mt-6">070-1321-1199</p>
    </div>
  </div>
)

export default ContactCard
