exec = require('child_process').exec

# Name for the temporary working directory
tmpFolderName = 'tmp-emberdata'

task 'getemberdata', 'download and build the latest ember-data.js', (options) ->
    makeTheDir ->
        cloneEmberDataRepo ->
            bundleAndRake ->
                moveToVendor ->
                    cleanTmp()


makeTheDir = (callback) ->
    # Remove tmp directory
    cleanTmp ->

        # Make a tmp directory
        statusMessage "Creating #{tmpFolderName} folder"
        exec "mkdir #{tmpFolderName}", (error, stdout, stderr) ->
            consolePrint(error, stdout, stderr)
            callback?()

cloneEmberDataRepo = (callback) ->
    # Clone with git
    statusMessage 'Cloning ember-data repo'
    exec 'git clone https://github.com/emberjs/data.git', {cwd: tmpFolderName}, (error, stdout, stderr) ->
        consolePrint(error, stdout, stderr)
        callback?()

bundleAndRake = (callback) ->
    # Run bundler on data folder
    statusMessage 'Running bundle on downloaded code'
    exec 'bundle', {cwd: "#{tmpFolderName}/data"}, (error, stdout, stderr) ->
        consolePrint(error, stdout, stderr)

        # Run rake
        statusMessage 'Running rake'
        exec 'rake dist', {cwd: "#{tmpFolderName}/data"}, (error, stdout, stderr) ->
            consolePrint(error, stdout, stderr)
            callback?()

moveToVendor = (callback) ->
    statusMessage 'Move ember-data.js to vendor folder'
    exec 'mv ember-data.js ../../../vendor/scripts/ember-data-master.js', {cwd: "#{tmpFolderName}/data/dist"}, (error, stdout, stderr) ->
        consolePrint(error, stdout, stderr)
        callback?()

cleanTmp = (callback) ->
    statusMessage "Deleting #{tmpFolderName} folder"
    exec 'rm -rf tmp-emberdata', (error, stdout, stderr) ->
        consolePrint(error, stdout, stderr)
        if callback
            callback()
        else
            statusMessage 'Done: you can find Ember Data on vendor/scripts/ember-data-master.js'

statusMessage = (message) ->
    if message
        console.log "----> #{message}"

consolePrint = (message, error, stdout, stderr) ->
    if stdout
        console.log "stdout: #{stdout or 'None'}"

    if stderr
        console.log "stderr: #{stderr or 'None'}"

    if error
        console.log('exec error: ' + error)
