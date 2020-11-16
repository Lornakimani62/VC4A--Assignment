import requests

url = "http://httpbin.org/status/404"

def return_response():
	response = requests.get(url)
	try:
		response.raise_for_status()
	except requests.exceptions.HTTPError as e:
		print("Error: " + str(e))

if __name__ == '__main__':
	return_response()
