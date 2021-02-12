import QrReaderScan from 'react-qr-reader'
const qrRef = useRef(null)
  const [scanResultFile, setScanResultFile] = useState('');

  const handleErrorFile = (error) =>{
    console.log(error)
  }
  const handleScanFile = (result) => {
    if(result){
      setScanResultFile(result)
    }
  }
  const onScanFile = () =>{
    qrRef.current.openImageDialog();
  }
const QrReader = () =>{
    return(
        <>
              <h3>Codigo escaneado: {scanResultFile}</h3>
              <Button variant="primary" onClick={onScanFile}>
                Scan  QrCode
                </Button>
                <QrReader
                  ref={qrRef}
                  delay={300}
                  style={{width:'100%'}}
                  onError={handleErrorFile}
                  onScan={handleScanFile}
                 
                />
              
        </>
    )
}
export default QrReaderScan