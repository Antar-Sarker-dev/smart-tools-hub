import { Image, Text, TouchableOpacity, View } from 'react-native';
export default function UploadCard({ handelFileUpload }: { handelFileUpload: () => void }) {
  return (
    <View className="mx-6 mt-20 items-center rounded-3xl bg-white px-5 py-14 shadow-md">
      <Image
        source={require('../../../assets/toolsIcons/word-to-pdf.webp')}
        style={{
          width: 100,
          height: 100,
          resizeMode: 'contain',
        }}
      />

      <Text className="mt-4 text-3xl font-bold text-slate-800">PDF to Word</Text>
      <Text className="mt-3 text-center text-base leading-6 text-slate-500">
        Convert your PDF files into editable Word (.docx) documents quickly and easily.
      </Text>

      <TouchableOpacity
        activeOpacity={0.8}
        className="mt-8 w-full items-center rounded-2xl bg-blue-600 py-4">
        <Text className="text-lg font-semibold text-white" onPress={handelFileUpload}>
          Upload PDF
        </Text>
      </TouchableOpacity>
    </View>
  );
}
