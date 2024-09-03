
    export const SendMail = async (email, subject, message) => {
        try {
          const response = await fetch('/api/sendMail', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email,
              subject,
              message,
            }),
          });
  
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const data = await response.json();
          console.log('Email sent:', data);
        } catch (error) {
          console.error('Error sending email:', error);
        }
      };

