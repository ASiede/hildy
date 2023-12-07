'use client';

import { Document, pdfjs, Page as PDFPage } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { Box, Card } from '@mui/material';
// import { SizeMe } from 'react-sizeme';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

const Page = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100% !important',
        height: 'auto !important',
      }}
    >
      <Document file={'./ChapterOneFormatted.pdf'}>
        <Card
          sx={{
            marginBottom: '10px',
            marginTop: '10px',
          }}
        >
          <PDFPage key={`page_1`} pageNumber={1} width={1000} />
        </Card>
        <Card sx={{ marginBottom: '10px', marginTop: '10px' }}>
          <PDFPage key={`page_2`} pageNumber={2} width={1000} />
        </Card>
        <Card sx={{ marginBottom: '10px', marginTop: '10px' }}>
          <PDFPage key={`page_3`} pageNumber={3} width={1000} />
        </Card>
      </Document>
    </Box>
  );
};

export default Page;
