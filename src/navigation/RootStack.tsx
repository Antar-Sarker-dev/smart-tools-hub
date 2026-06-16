import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import DrawerNavigator from './DrawerNavigator';
import CompressPDF from '@/screens/tools/compressPDF';
import AddHeaderFooter from '@/screens/tools/addHeaderFooter';
import CropPDF from '@/screens/tools/cropPDF';
import EditPDF from '@/screens/tools/editPDF';
import Files from '@/screens/tools/files';
import ImageToPDF from '@/screens/tools/imageToPDF';
import MergePdfScreen from '@/screens/tools/mergePDF';
import PageNumber from '@/screens/tools/pageNumber';
import PdfToImage from '@/screens/tools/pdfToImage';
import PdfWaterMark from '@/screens/tools/pdfWatermark';
import QrCodeGeneratorScreen from '@/screens/tools/qrCode';
import ResizePDF from '@/screens/tools/resizePDF';
import SplitPDF from '@/screens/tools/splitPDF';
import ViewPDF from '@/screens/tools/viewPDF';

const Stack = createNativeStackNavigator();
export default function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={DrawerNavigator} />
      <Stack.Screen
        name="compressPDF"
        component={CompressPDF}
        options={{ title: 'compress pdf', headerShown: true }}
      />
      <Stack.Screen
        name="addHeaderFooter"
        component={AddHeaderFooter}
        options={{ title: 'add header & footer', headerShown: true }}
      />
      <Stack.Screen
        name="cropPDf"
        component={CropPDF}
        options={{ title: 'crop pdf', headerShown: true }}
      />
      <Stack.Screen
        name="editPDF"
        component={EditPDF}
        options={{
          title: 'edit pdf',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="files"
        component={Files}
        options={{ title: 'files', headerShown: true }}
      />
      <Stack.Screen
        name="imageToPDF"
        component={ImageToPDF}
        options={{ title: 'image to pdf', headerShown: true }}
      />
      <Stack.Screen
        name="mergePDF"
        component={MergePdfScreen}
        options={{ title: 'merge pdf', headerShown: true }}
      />
      <Stack.Screen
        name="pageNumber"
        component={PageNumber}
        options={{ title: 'page number', headerShown: true }}
      />
      <Stack.Screen
        name="pdfToImage"
        component={PdfToImage}
        options={{ title: 'pdf to image', headerShown: true }}
      />
      <Stack.Screen
        name="pdfWaterMark"
        component={PdfWaterMark}
        options={{ title: 'pdf watermark', headerShown: true }}
      />
      <Stack.Screen
        name="qrCode"
        component={QrCodeGeneratorScreen}
        options={{ title: 'qr code generator', headerShown: true }}
      />
      <Stack.Screen
        name="resizePDF"
        component={ResizePDF}
        options={{ title: 'resize pdf', headerShown: true }}
      />
      <Stack.Screen
        name="splitPDF"
        component={SplitPDF}
        options={{ title: 'split pdf', headerShown: true }}
      />

      <Stack.Screen
        name="viewPDF"
        component={ViewPDF}
        options={{ title: 'view pdf', headerShown: true }}
      />
    </Stack.Navigator>
  );
}
