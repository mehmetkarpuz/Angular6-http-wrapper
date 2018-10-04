import { HttpWrapperService } from '../httpwrapper/httpwrapper.service';
import { environment } from '../Environments/environment';

export abstract class BaseService {
    constructor(private _http: HttpWrapperService) {
        _http.setBaseUrl(environment.baseUrl);
        _http.setHeader("Content-Type", "application/json");
    }
}