import React, {FC} from 'react';

interface SuccessNotification {
  dismiss: any
}

const SuccessNotification: FC<SuccessNotification> = ({ dismiss }) => {
  return (
    <div>
      <div className="w-80 border-l-4 border-green-400 bg-green-50 p-4 text-sm flex items-center shadow-lg relative z-50 rounded-md">
        <button
          type="button"
          className="absolute right-0 top-0 w-4 m-3"
          onClick={dismiss}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="w-5 h-5 text-green-500 mr-2 flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <p>
          This is a demo notification, you can customize it live in the editor!
        </p>
      </div>
    </div>
  );
};

export default SuccessNotification;
