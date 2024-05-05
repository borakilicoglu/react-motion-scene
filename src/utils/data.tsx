import { File, Stamp, Scan, Filters, Export } from '../components/icons';

export const tabs: { title: string; icon: JSX.Element }[] = [
  { title: 'Document Scanner', icon: <File /> },
  { title: 'Sign & Stamp', icon: <Stamp /> },
  { title: 'Batch Scanning', icon: <Scan /> },
  { title: 'Advanced Filters', icon: <Filters /> },
  { title: 'Export & Share', icon: <Export /> },
];

export const contents: { title: string; slug: string; desc: string }[] = [
  {
    title: 'Document Scanner',
    slug: 'Scan with Ease',
    desc: 'Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format.',
  },
  {
    title: 'Sign & Stamp',
    slug: 'One-Tap Focus',
    desc: 'Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!',
  },
  {
    title: 'Batch Scanning',
    slug: 'Multiple Page Scan',
    desc: 'Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.',
  },
  {
    title: 'Advanced Filters',
    slug: 'Unique Filters',
    desc: 'Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.',
  },
  {
    title: 'Export & Share',
    slug: 'All-Round Conversion',
    desc: 'Export your scans as PDF,JPG,ZIP,TXT and Word.',
  },
];
