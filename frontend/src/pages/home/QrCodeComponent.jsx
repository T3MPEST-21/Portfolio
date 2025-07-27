import QRCode from 'qrcode.react'

const QrCodeComponent = ({
    value = '',
    size = 128
}) => {
  return (
    <div className="">
      <QrCode value={value} size={size} bgColor='#fff' fgColor="#000000" level="H" includeMargin={true}/>
    </div>
  );
};

export default QrCodeComponent;