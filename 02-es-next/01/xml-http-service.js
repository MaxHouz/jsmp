const request = new XMLHttpRequest();

export default class XmlHttpService {
    static get(url) {
        return new Promise((resolve, reject) => {
            request.open('GET', url);
            request.onload = () => {
                if (request.status >= 200 && request.status < 300) {
                    resolve(request.response);
                } else {
                    reject(request.status)
                }
            };
            request.send();
        });
    }

    static post(url, data) {
        const payload = typeof data === 'object'
            ? JSON.stringify(data)
            : data;

        return new Promise((resolve, reject) => {
           request.open('POST', url);
           request.setRequestHeader("Content-type", "application/json");
           request.onload = () => {
                if (request.status >= 200 && request.status < 300) {
                    resolve(request.response);
                } else {
                    reject(request.status)
                }
            };
            request.send(payload);
        });
    }

    static put(url, data) {
        const payload = typeof data === 'object'
            ? JSON.stringify(data)
            : data;

        return new Promise((resolve, reject) => {
            request.open('PUT', url);
            request.setRequestHeader("Content-type", "application/json");
            request.onload = () => {
                if (request.status >= 200 && request.status < 300) {
                    resolve(request.response);
                } else {
                    reject(request.status)
                }
            };
            request.send(payload);
        });
    }

    static delete(url) {
        return new Promise((resolve, reject) => {
            request.open('DELETE', url);
            request.onload = () => {
                if (request.status >= 200 && request.status < 300) {
                    resolve(request.response);
                } else {
                    reject(request.status)
                }
            };
            request.send();
        });
    }
}

