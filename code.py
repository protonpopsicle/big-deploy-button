import web
import subprocess

render = web.template.render('static/')

urls = (
    '/', 'index',
    '/deploy', 'deploy',
)

class index:
    def GET(self):
        return render.index() 

class deploy:
    def GET(self):
	p = subprocess.Popen(['fab', 'quick_deploy'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
	out, err = p.communicate()
        if err:
            return err
        return out

if __name__ == "__main__":
    app = web.application(urls, globals())
    app.run()
