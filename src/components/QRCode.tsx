
const QRCode = () => {
  return (
    <div className="bg-card rounded-3xl overflow-hidden shadow-lg p-4 text-center">
      <div className="rounded-xl overflow-hidden">
        <img className="w-full" src="/images/image-qr-code.png" alt="QR Code"/>
      </div>      
      <div className="px-4 py-6">
        <div className="text-dark font-bold text-2xl leading-tight mb-4">
          Improve your front-end skills by building projects
        </div>
        <p className="text-light leading-tight">
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </div>
    </div>
  )
}

export default QRCode
