module.exports = {
  data: function(element) {
    let classList = ['callout'];
    element.attributes.map(function(attribute) {
      if (attribute.name === 'success')
        classList.push('success');
      else if (attribute.name === 'warning')
        classList.push('warning');
      else if (attribute.name === 'error')
        classList.push('error');
    });

    return {
      tag: 'div',
      attributes: {
        class: classList.join(' ')
      },
      children: element.innerHTML
    }
  },
  styles: function() {
    return {
      '.callout': {
        backgroundColor: '#F0F2F2',
        color: '#455055',
        borderRadius: '3px',
        padding: '18px',
        fontSize: '18px',
        maxWidth: '33em',
        borderLeft: '4px solid #1CA9F0',
        position: 'relative'
      },
      '.callout::before': {
        content: '"i"',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '-11px',
        left: '-13px',
        width: '22px',
        height: '22px',
        borderRadius: '100%',
        backgroundColor: '#1CA9F0',
        color: '#FFFFFF',
        fontSize: '16px',
        fontWeight: '600'
      },
      '.callout code': {
        backgroundColor: '#d7d9d9'
      },
      '.callout.success': {
        borderLeftColor: '#0CCE3A'
      },
      '.callout.success:before': {
        backgroundColor: '#0CCE3A'
      },
      '.callout.warning': {
        borderLeftColor: '#F49518'
      },
      '.callout.warning:before': {
        content: '"!"',
        backgroundColor: '#F49518'
      },
      '.callout.error': {
        borderLeftColor: '#D51919'
      },
      '.callout.error:before': {
        content: '"!"',
        backgroundColor: '#D51919'
      }
    }
  }
}