import Router from 'next/router';
import { useEffect, useState } from 'react';

/**
 * HOC to wrap admin pages with auth component
 */
/* eslint-disable react/jsx-props-no-spreading */
export default function WithAuth(WrappedComponent) {
  const ProtectedComponent = (props) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      if (!sessionStorage.getItem('token')) {
        Router.push('/admin/login');
      } else {
        setLoading(true);
      }
    }, []);

    return loading && <WrappedComponent {...props} />;
  };

  ProtectedComponent.getInitialProps = async (ctx) => {
    const componentProps = WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(ctx));
    return { ...componentProps };
  };

  return ProtectedComponent;
}
