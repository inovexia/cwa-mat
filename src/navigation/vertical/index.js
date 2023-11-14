const navigation = () => {
  return [
    {
      title: 'Home',
      path: '/home',
      icon: 'mdi:home-outline'
    },
    {
      title: 'Course',
      path: '/course',
      icon: 'mdi:book-outline'
    },
    {
      title: 'Tests',
      // path: '/second-page',
      icon: 'mdi:notes-outline'
    },
    {
      title: 'User',
      path: '/user',
      icon: 'mdi:user-outline'
    },
    {
      path: '/acl',
      action: 'read',
      subject: 'acl-page',
      title: 'Settings',
      icon: 'mdi:settings-outline'
    }
  ]
}

export default navigation
