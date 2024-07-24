/*
 * Copyright (c) 2014-2023 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

require('./lib/startup/validateDependencies')().then(() => {
  const server = require('./server')
  server.start()
})

console.log (AWS_SECRET_KEY : wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY)
