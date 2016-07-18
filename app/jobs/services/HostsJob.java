/*
 *   Copyright 2016 ITM, S.A.
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 * `*   `[`http://www.apache.org/licenses/LICENSE-2.0`](http://www.apache.org/licenses/LICENSE-2.0)
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */
package jobs.services;

import drp.OvirtApi;
import dto.DtoHelper;
import dto.objects.HostDto;
import dto.objects.StatusDto;
import dto.response.ServiceResponse;
import models.RemoteHost;
import org.ovirt.engine.sdk.Api;
import org.ovirt.engine.sdk.decorators.Host;
import play.Logger;
import play.i18n.Messages;
import play.jobs.Job;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by jandrad on 27/01/16.
 */
public class HostsJob extends Job<ServiceResponse> {

    @Override
    public ServiceResponse doJobWithResult() throws Exception {

        ServiceResponse serviceResponse = null;

        Api api = null;
        try {
            api = OvirtApi.getApi();

            StatusDto data = new StatusDto();

            List<RemoteHost> remoteHosts = RemoteHost.find("active = :a").bind("a", true).fetch();
            List<Host> hosts = api.getHosts().list();
            List<HostDto> hostDtos = new ArrayList<HostDto>();
            for (Host host : hosts) {
                data.addToStatusCount(host.getStatus().getState());
                HostDto dto = DtoHelper.getHostDto(host);
                dto.setType(DtoHelper.getRecoveryType(dto, remoteHosts));
                hostDtos.add(dto);
            }

            data.setList(hostDtos);
            serviceResponse = ServiceResponse.success(data);
            api.close();
        } catch (Exception e) {
            Logger.error(e, "Error getting hosts");
            serviceResponse = ServiceResponse.error(Messages.get("ws.error.exception"));

        }

        return serviceResponse;
    }
}
