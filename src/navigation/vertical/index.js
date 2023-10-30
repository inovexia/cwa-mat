const navigation = () => {
  return [
    {
      title: 'Home',
      path: '/home',
      icon: 'mdi:home-outline'
    },
    {
      title: 'Course',
      path: '/second-page',
      icon: 'mdi:email-outline'
    },
    {
      title: 'Test',
      // path: '/second-page',
      icon: 'mdi:email-outline'
    },
    {
      title: 'User',
      // path: '/second-page',
      icon: 'mdi:email-outline'
    },
    {
      path: '/acl',
      action: 'read',
      subject: 'acl-page',
      title: 'Access Control',
      icon: 'mdi:shield-outline'
    }
  ]
}

export default navigation
