import { useState, useEffect } from 'react';
import {connect} from 'react-redux';

import Loading from 'components/Loading';
import { getSellers } from 'actions/auth';

const LIMIT = 12;

const Sellers = ({ isAuthenticated, role, sellers, count, loading, getSellers }) => {
  const [filter, setFilter] = useState({
    name: null,
    phoneNumber: null,
    email: null,
    licenseNumber: null,
    postalCode: null,
    sortBy: 'date',
  });
  const [page, setPage] = useState(1);
  useEffect(() => {
    getSellers(filter, {skip: (page - 1) * LIMIT, limit: LIMIT});
  }, []);
  useEffect(() => {
    if(isAuthenticated === false) window.location.href = '/';
    if(role && role !== 'admin') window.location.href = '/';
  }, [isAuthenticated, role]);

  const goPage = (p) => {
    if(p < 1) p = 1;
    else if(p > Math.ceil(count / LIMIT)) p = Math.ceil(count / LIMIT);
    setPage(p);
    getSellers(filter, {skip: (p - 1) * LIMIT, limit: LIMIT});
  }

  const onChange = (e) => {
    setFilter({...filter, [e.target.name]: e.target.value});
  }

  const onKeyDownInput = (e) => {
    if(e.keyCode === 13) {
      setPage(1);
      getSellers(filter, {skip: 0, limit: LIMIT});
    }
  }
  return (
    <div>
      <Loading showYou={loading} />
      <div className="container clear__top">
        <div className="admin-sellers mt-lg-4">
          <h3>Sellers</h3>
          <div className='mt-4'>
            <div className="filter-area">
              <div className="form-group d-flex align-items-center">
                <label for="usr" className='me-2'>Name:</label>
                <input type="text" className="form-control" value={filter.name} name="name" style={{maxWidth: 300}} onChange={onChange} onKeyDown={onKeyDownInput} />
              </div>
            </div>
            <div className='mt-4 row'>
                {
                  sellers.map(seller => (
                    <div className='col-12 col-lg-6 ps-4 pe-4'>
                      <div key={seller._id} style={{borderRadius: '5px', boxShadow: '0px 2px 5px rgb(0 0 0 / 30%)', padding: '10px', cursor: 'pointer'}}>
                        <div className='row'>
                          <div className='col-4'>
                            <img style={{width: '100%', borderRadius: '5px', boxShadow: '0 0 5px rgb(0 0 0 / 30%)'}} 
                              src={seller && seller.avatar ? seller.avatar : "/assets/images/profile.jpg"} alt="seller" />
                          </div>
                          <div className='col-8'>
                            <h5 className='mt-2 mb-2'>{seller.firstName}&nbsp;{seller.lastName}</h5>
                            <div>
                              <div className='col-12'><span style={{fontSize: 17}}>Email: <b>{seller.email}</b></span></div>
                              <div className='col-12'><span style={{fontSize: 17}}>Phone Number: <b>{seller.phoneNumber}</b></span></div>
                              <div className='col-12'><span style={{fontSize: 17}}>Postal Code: <b>{seller.postalCode}</b></span></div>
                              <div className='col-12'><span style={{fontSize: 17}}>License Number: <b>{seller.licenseNumber}</b></span></div>
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
  sellers: state.admin.sellers,
  count: state.admin.sellerCnt,
});

export default connect(mapStateToProps, { getSellers }) (Sellers);