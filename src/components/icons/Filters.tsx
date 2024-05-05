export function Filters({
  fillColor = '#0381FF',
  isActive = false,
}: {
  isActive?: boolean;
  fillColor?: string;
}) {
  const color = isActive ? fillColor : '#666666';

  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Iconly/Bulk/Time Circle">
        <g id="filter 1">
          <g id="Ikon">
            <path
              id="Vector"
              d="M29.9999 21C29.9908 22.436 29.6395 23.8491 28.9751 25.1222C28.3106 26.3953 27.3522 27.4916 26.1794 28.3202C25.0065 29.1488 23.653 29.6858 22.2311 29.8868C20.8092 30.0877 19.3599 29.9467 18.0034 29.4755C19.3535 28.3637 20.4174 26.9445 21.1061 25.3368C21.7947 23.7292 22.0879 21.9799 21.9612 20.2355C24.2141 18.7733 25.8577 16.541 26.5849 13.9555C27.6489 14.7958 28.5089 15.8661 29.1003 17.0861C29.6917 18.3061 29.9993 19.6442 29.9999 21Z"
              fill={color}
            />
            <path
              id="Vector_2"
              d="M19.9878 21.2405C19.9491 22.7538 19.5292 24.2329 18.7669 25.5408C18.0045 26.8487 16.9245 27.943 15.6267 28.7224C14.329 29.5018 12.8555 29.9411 11.3428 29.9996C9.83012 30.0581 8.32714 29.7339 6.97308 29.057C5.61902 28.3801 4.45769 27.3724 3.59666 26.1273C2.73563 24.8822 2.20275 23.4399 2.04738 21.9341C1.89201 20.4283 2.11918 18.9076 2.70785 17.5129C3.29651 16.1183 4.22763 14.8947 5.41495 13.9556C5.83617 15.4285 6.559 16.7978 7.53756 17.9765C8.51613 19.1553 9.72906 20.1177 11.0994 20.8027C12.4697 21.4877 13.9674 21.8804 15.4976 21.9557C17.0277 22.0311 18.5568 21.7875 19.9878 21.2405Z"
              fill={color}
            />
            <path
              id="Vector_3"
              d="M7 11C7 9.21997 7.52784 7.47991 8.51677 5.99987C9.50571 4.51983 10.9113 3.36628 12.5558 2.68509C14.2004 2.0039 16.01 1.82567 17.7558 2.17294C19.5016 2.5202 21.1053 3.37737 22.364 4.63604C23.6226 5.89471 24.4798 7.49836 24.8271 9.24419C25.1743 10.99 24.9961 12.7996 24.3149 14.4442C23.6337 16.0887 22.4802 17.4943 21.0001 18.4832C19.5201 19.4722 17.78 20 16 20C13.6139 19.9974 11.3262 19.0483 9.63896 17.361C7.95171 15.6738 7.00265 13.3861 7 11Z"
              fill={color}
            />
          </g>
        </g>
      </g>
    </svg>
  );
}