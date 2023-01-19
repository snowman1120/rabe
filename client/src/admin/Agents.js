import { useState, useEffect } from 'react';
import {connect} from 'react-redux';

import Loading from 'components/Loading';
import { getAgents, toggleApprove } from 'actions/auth';
import SuccessModal from 'components/SuccessModal';

const LIMIT = 12;

const Agents = ({ isAuthenticated, role, agents, count, loading, getAgents, toggleApprove }) => {
  const [filter, setFilter] = useState({
    name: null,
    phoneNumber: null,
    email: null,
    licenseNumber: null,
    postalCode: null,
    sortBy: 'date',
  });
  const [page, setPage] = useState(1);
  const [successModalShow, setSuccessModalShow] = useState(false);
  useEffect(() => {
    getAgents(filter, {skip: (page - 1) * LIMIT, limit: LIMIT});
  }, []);
  useEffect(() => {
    if(isAuthenticated === false) window.location.href = '/';
    if(role && role !== 'admin') window.location.href = '/';
  }, [isAuthenticated, role]);

  const goPage = (p) => {
    if(p < 1) p = 1;
    else if(p > Math.ceil(count / LIMIT)) p = Math.ceil(count / LIMIT);
    setPage(p);
    getAgents(filter, {skip: (p - 1) * LIMIT, limit: LIMIT});
  }

  const onChange = (e) => {
    setFilter({...filter, [e.target.name]: e.target.value});
  }

  const onKeyDownInput = (e) => {
    if(e.keyCode === 13) {
      setPage(1);
      getAgents(filter, {skip: 0, limit: LIMIT});
    }
  }

  const handleApprove = (id) => {
    toggleApprove(id, () => {
      setSuccessModalShow(true);
    });
  }

  return (
    <div>
      <SuccessModal
        show={successModalShow}
        onHide={() => setSuccessModalShow(false)}
        message="successfully done."
    />
      <Loading showYou={loading} />
      <div className="container clear__top">
        <div className="admin-agents mt-lg-4">
          <h3>Agents</h3>
          <div className='mt-4'>
            <div className="filter-area">
              <div className="form-group d-flex align-items-center">
                <label for="usr" className='me-2'>Name:</label>
                <input type="text" className="form-control" value={filter.name} name="name" style={{maxWidth: 300}} onChange={onChange} onKeyDown={onKeyDownInput} />
              </div>
            </div>
            <div className='mt-4 row'>
                {
                  agents.map(agent => (
                    <div key={agent._id} className='col-12 col-lg-6 ps-4 pe-4'>
                      <div style={{borderRadius: '5px', boxShadow: '0px 2px 5px rgb(0 0 0 / 30%)', padding: '10px', cursor: 'pointer'}}>
                        <div className='row'>
                          <div className='col-4'>
                            <img style={{width: '100%', borderRadius: '5px', boxShadow: '0 0 5px rgb(0 0 0 / 30%)'}} 
                              src={agent && agent.avatar ? agent.avatar : "/assets/images/profile.jpg"} alt="agent" />
                          </div>
                          <div className='col-8'>
                            <div className='justify-content-between d-flex align-items-center'>
                              <h5 className='mt-2 mb-2'>{agent.firstName}&nbsp;{agent.lastName}</h5>
                              <div className='me-3' 
                                style={{width: 30, height: 30, borderRadius: "50%", backgroundColor: agent.approve ? '#00d5ff' : '#ff4646'}}
                                onClick={() => handleApprove(agent._id)}
                              ></div>
                            </div>
                            <div>
                              <div className='col-12'><span style={{fontSize: 17}}>Email: <b>{agent.email}</b></span></div>
                              <div className='col-12'><span style={{fontSize: 17}}>Phone Number: <b>{agent.phoneNumber}</b></span></div>
                              <div className='col-12'><span style={{fontSize: 17}}>Postal Code: <b>{agent.postalCode}</b></span></div>
                              <div className='col-12'><span style={{fontSize: 17}}>License Number: <b>{agent.licenseNumber}</b></span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
            </div>
            <div className='pagination'>
              <nav className='m-auto' aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li className={page <= 1 ? 'page-item disabled' : 'page-item'}>
                    <a className="page-link" href="#!" onClick={() => goPage(1)}>&lt;&lt;</a>
                  </li>
                  <li className={page <= 1 ? 'page-item disabled' : 'page-item'}>
                    <a className="page-link" href="#!" onClick={() => goPage(page - 1)}>&lt;</a>
                  </li>
                  <li className="page-item d-flex"><span className='d-flex align-items-center ms-2 me-2'>{page}&nbsp;/&nbsp;{Math.ceil(count / LIMIT)}</span></li>
                  <li className={page >= Math.ceil(count / LIMIT) ? 'page-item disabled' : 'page-item'}>
                    <a className="page-link" href="#!" onClick={() => goPage(page + 1)}>&gt;</a>
                  </li>
                  <li className={page >= Math.ceil(count / LIMIT) ? 'page-item disabled' : 'page-item'}>
                    <a className="page-link" href="#!" onClick={() => goPage(Math.ceil(count / LIMIT))}>&gt;&gt;</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  loading: state.admin.loading,
  serverErrors: state.admin.errors,
  isAuthenticated: state.auth.isAuthenticated,
  role: state.auth.user && state.auth.user.role,
  agents: state.admin.agents,
  count: state.admin.agentCnt,
});

export default connect(mapStateToProps, { getAgents, toggleApprove }) (Agents);