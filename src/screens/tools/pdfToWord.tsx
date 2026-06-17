import ConvertCard from '@/component/pdfToWord/convertCard';
import UploadCard from '@/component/pdfToWord/uploadCard';
import { useState } from 'react';
import { View } from 'react-native';

export default function PdfToWord() {
  const [isOpenConvertCard, setIsOPenConvertCard] = useState<boolean>(false);

  function handelFileUpload(){
    
    setIsOPenConvertCard(true);
  }
  return (
    <View className="flex-1 bg-[#E5E4E2]">
      {isOpenConvertCard ? <ConvertCard /> : <UploadCard handelFileUpload={handelFileUpload}/>}
    </View>
  );
}
