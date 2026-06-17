import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function ConvertCard() {
  return (
    <View className="mx-6 mt-20 items-center rounded-3xl bg-white px-5 py-14 shadow-md">
      <View className="relative">
        {/* file */}
        <View className="items-center rounded-3xl border border-gray-200 bg-white px-12 py-5 shadow-md">
          <View className="mb-6 h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
            <Image
              source={require('../../../assets/toolsIcons/word-to-pdf.webp')}
              className="h-12 w-12"
              resizeMode="contain"
            />
          </View>
          <Text className="mb-2 text-lg font-bold text-gray-800">file-1.pdf</Text>
          <Text className="text-sm text-gray-500">0.02 MB</Text>
        </View>

        {/* Delete Button */}
        <TouchableOpacity
          activeOpacity={0.8}
          className="absolute right-2 top-2 rounded-xl bg-white shadow-lg">
          <Image
            source={require('../../../assets/toolsIcons/deleteIcon.webp')}
            className="h-8 w-8"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {/*convert button */}
      <TouchableOpacity
        activeOpacity={0.8}
        className="mt-8 w-full items-center rounded-2xl bg-green-600 py-4">
        <Text className="text-lg font-semibold text-white">Convert to Word</Text>
      </TouchableOpacity>
    </View>
  );
}
