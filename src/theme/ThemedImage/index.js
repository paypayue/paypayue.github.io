import React from 'react';
import {ThemedComponent} from '@docusaurus/theme-common';
export default function ThemedImage(props) {
  const {sources, className: parentClassName, alt, ...propsRest} = props;
  return (
    <ThemedComponent className={parentClassName}>
      {({theme, className}) => (
        <div
          alt={alt}
          className={className}
          {...propsRest}
          src={sources[theme]}
          style={{backgroundImage: `url(${sources[theme]})`}}></div>
      )}
    </ThemedComponent>
  );
}
